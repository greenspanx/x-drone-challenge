import {Allocator} from '../Allocator'

describe("test class Allocator", () => {

    it('allocates instructions to 4 drones', () => {
        const instructions = '1234123412341234123412';
        const drone_counts = 4;
        const allocator = new Allocator(instructions, drone_counts);       
        const allocatedIns = allocator.allocate();               
        expect(allocatedIns[0]).toEqual('111111');
        expect(allocatedIns[1]).toEqual('222222');
        expect(allocatedIns[2]).toEqual('33333');
        expect(allocatedIns[3]).toEqual('44444');
    })

    it('allocates instructions to 5 drones', () => {
        const instructions = '12345123451234512345123';
        const drone_counts = 5; 
        const allocator = new Allocator(instructions, drone_counts);       
        const allocatedIns = allocator.allocate();        
        expect(allocatedIns[0]).toEqual('11111');
        expect(allocatedIns[1]).toEqual('22222');
        expect(allocatedIns[2]).toEqual('33333');
        expect(allocatedIns[3]).toEqual('4444');
        expect(allocatedIns[4]).toEqual('5555');
    })

    it('allocates instructions to 1 drone', () => {
        const instructions = '1111111111111111111122';
        const drone_counts = 1; 
        const allocator = new Allocator(instructions, drone_counts);       
        const allocatedIns = allocator.allocate();        
        expect(allocatedIns[0]).toEqual('1111111111111111111122'); 
        expect(allocatedIns.length).toEqual(1);       
    })

})
